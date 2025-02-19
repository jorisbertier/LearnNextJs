import { NextRequest } from "next/server";
import { articles } from "./data";

export async function GET(request: NextRequest) {
    const requestParams = request.nextUrl.searchParams;
    const query = requestParams.get('search')
    const filteredArticle = query 
    ?
    articles.find(article => article.title.includes(query))
    : articles;
    
    return Response.json(filteredArticle);
  }

export async function POST(r: Request) {
    const article = await r.json()
    const newArticle = {
        id: articles.length + 1,
        title: article.title
    }

    articles.push(newArticle)

    return new Response(JSON.stringify(newArticle), {
        headers: {
            "Content-Type": 'application/json'
        },
        status: 201
    })
}

export async function PATCH(request: Request,
    {params} : {params: {id: string}}
) {
    const body = await request.json();
    const title = body.title;
    const index = articles.findIndex(article =>
        article.id === Number(params.id)
    )
    articles[index].title = title
    return Response.json(articles[index])
}