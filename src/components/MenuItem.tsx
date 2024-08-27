import { Dispatch } from "react"
import type { MenuItem } from "../types"
import { OrderActions } from "../reducers/order-reducer"

type menuItemProps = {
    item: MenuItem,
    dispatch: Dispatch<OrderActions>
}

//Se le debe marcar que va a recibir algo o marca error
export default function MenuItem({ item, dispatch }: menuItemProps) {
    return (

        <button
            className="border-2 border-teal-400 hover:bg-teal-200 w-full p-3 flex justify-between"
            onClick={() => dispatch({ type: 'add-item', payload: { item } })}
        >
            <p>{item.name}</p>
            <p className="font-black">${item.price}</p>

        </button>
    )
}
