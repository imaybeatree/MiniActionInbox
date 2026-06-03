import type { ActionItem } from './mockData'

type ActionItemProps = {
  item: ActionItem
  onToggleStatus: (itemId: number) => void
}

function ActionItemRow({ item, onToggleStatus }: ActionItemProps) {
  return (
    <li className={`rounded-md border bg-slate-50 px-4 py-3.5 text-left ${item.status === "active" ? "border-blue-500" : "border-green-500"}`}>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0">
          <h2 className="m-0 line-clamp-1 text-base font-semibold text-slate-950">
            {item.title}
          </h2>
          <p className="mt-1 line-clamp-4 text-sm text-slate-600">
            {item.description}
          </p>
        </div>

        <div className="grid w-full grid-cols-2 gap-x-4 gap-y-2 text-sm sm:w-auto sm:min-w-64">
          <div>
            <p className="text-xs uppercase text-slate-500">
              Status
            </p>
            <p className="m-0 capitalize">
              {item.status}
            </p>
          </div>
          <div>
            <p className="text-xs uppercase text-slate-500">
              Type
            </p>
            <p className="m-0 capitalize">
              {item.type}
            </p>
          </div>
          <div className="col-span-2">
            <p className="text-xs uppercase text-slate-500">
              Due Date
            </p>
            <p className="m-0">
              {item.dueDate}
            </p>
          </div>
          <button
            className="col-span-2 rounded-md border border-slate-300 bg-white px-3 py-2 font-medium capitalize shadow-sm hover:bg-slate-100"
            type="button"
            onClick={() => onToggleStatus(item.id)}
          >
            Mark {item.status === 'active' ? 'completed' : 'active'}
          </button>
        </div>
      </div>
    </li>
  )
}

export default ActionItemRow
