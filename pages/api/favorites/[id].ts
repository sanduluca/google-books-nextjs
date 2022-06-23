import { database } from '../../../src/database'
export default function handler({ query: { id }, method, body }: any, res: any) {


    if (method === "DELETE") {

        if (!database[id]) {
            return res.status(404).json({
                message: 'Book is not in favorites'
            })
        }
        delete database[id]
        res.status(200).json({
            ok: true
        })
    }

}