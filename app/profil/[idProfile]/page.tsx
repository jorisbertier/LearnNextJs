import React from 'react'

export default async function User({ params}: {
    params: Promise<{idProfile: string}>
}) {

    const idProfile = (await params).idProfile
    
    return (
        <div>Profile {idProfile}
        </div>
    )
}
