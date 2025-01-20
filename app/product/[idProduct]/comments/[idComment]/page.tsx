import React from 'react'

export default function Comment({ params: { idProduct, idComment} }: {
    params: {
        idProduct: string;
        idComment: string;
    }
}) {
    return (
        <div>Comment {idComment} for product{idProduct}</div>
    )
}
