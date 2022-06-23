import { database } from '../../../src/database'
export default function handler({ method, body }: any, res: any) {
    if (method === "GET") {

        res.status(200).json({
            favorites: Object.values(database)
        })
        return
    }

    if (method === "POST") {
        const volumeId = body.id
        database[volumeId] = volumeId

        res.status(201).json({
            ok: true
        })
        return
    }

}