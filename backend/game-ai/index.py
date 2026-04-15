import os
import json
import urllib.request
import urllib.error


def handler(event: dict, context) -> dict:
    """Генерация идеи игры по теме защиты от мошенников через OpenAI."""

    if event.get('httpMethod') == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400',
            },
            'body': ''
        }

    body = json.loads(event.get('body') or '{}')
    genre = body.get('genre', 'квиз')
    theme = body.get('theme', 'мошенничество в интернете')
    audience = body.get('audience', 'молодёжь 14-25 лет')

    api_key = os.environ.get('OPENAI_API_KEY', '')

    prompt = f"""Ты — геймдизайнер образовательных игр о цифровой безопасности.
Придумай концепцию игры со следующими параметрами:
- Жанр: {genre}
- Тема: {theme}
- Аудитория: {audience}

Ответь строго в формате JSON:
{{
  "title": "название игры",
  "tagline": "короткий слоган (до 10 слов)",
  "description": "описание игры (2-3 предложения)",
  "mechanics": ["механика 1", "механика 2", "механика 3"],
  "levels": ["уровень 1", "уровень 2", "уровень 3", "уровень 4", "уровень 5"],
  "win_condition": "условие победы",
  "educational_goal": "чему научит игра"
}}
Только JSON, без markdown и лишнего текста."""

    request_data = json.dumps({
        "model": "gpt-4o-mini",
        "messages": [{"role": "user", "content": prompt}],
        "temperature": 0.85,
        "max_tokens": 700,
    }).encode('utf-8')

    req = urllib.request.Request(
        'https://api.openai.com/v1/chat/completions',
        data=request_data,
        headers={
            'Authorization': f'Bearer {api_key}',
            'Content-Type': 'application/json',
        },
        method='POST'
    )

    with urllib.request.urlopen(req, timeout=25) as resp:
        result = json.loads(resp.read().decode('utf-8'))

    content = result['choices'][0]['message']['content'].strip()
    game_idea = json.loads(content)

    return {
        'statusCode': 200,
        'headers': {'Access-Control-Allow-Origin': '*'},
        'body': json.dumps({'ok': True, 'game': game_idea}, ensure_ascii=False)
    }
