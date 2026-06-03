import type { ActionItem } from './mockData'

type ActionItemProps = {
  item: ActionItem
}

function ActionItemRow({ item }: ActionItemProps) {
  return (
    <li className="rounded-md border border-slate-200 bg-slate-50 px-4 py-3.5 text-left">
      <div className="flex flex-row items-start justify-between gap-3">
        <div className="min-w-0">
          <h2 className="m-0 text-base font-semibold text-slate-950">
            {item.title}
          </h2>
          <p className="mt-1 text-sm text-slate-600">
            {item.description}
          </p>
        </div>

        <div className="grid min-w-64 grid-cols-2 gap-x-4 gap-y-2 text-sm">
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
        </div>
      </div>
    </li>
  )
}

export default ActionItemRow
