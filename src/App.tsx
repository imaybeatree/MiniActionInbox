import { useMemo, useState } from 'react'
import ActionItemRow from './ActionItem'
import { mockActionItems, type ActionItemStatus } from './mockData'

type StatusFilter = 'all' | ActionItemStatus

function App() {
  const [actionItems, setActionItems] = useState(mockActionItems) // init using mockActionItems
  const [statusFilter, setStatusFilter] = useState<StatusFilter>('all')
  // useMemo to only rerender on statusfilter change
  const filteredActionItems = useMemo(() => {
    if (statusFilter === 'all') {
      return actionItems
    }

    return actionItems.filter((item) => item.status === statusFilter)
  }, [actionItems, statusFilter])

  const handleToggleStatus = (itemId: number) => {
    setActionItems((prev) =>
      prev.map((item) =>
        item.id === itemId?
            {
              ...item,
              status: item.status === 'active' ? 'completed' : 'active',
            }
          : item
      )
    )
  }
  
  return (
    <main className="min-h-svh bg-slate-50 px-5 py-8 text-slate-950">
      <header className="mx-auto mb-6 max-w-3xl border-b border-slate-300 pb-4">
        <h1>
          Mini Action Inbox
        </h1>
      </header>
      <div className="mx-auto mb-4 flex max-w-3xl items-center justify-end gap-3">
        <select
          className="rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-950 shadow-sm"
          id="status-filter"
          value={statusFilter}
          onChange={(event) => setStatusFilter(event.target.value as StatusFilter)}
        >
          <option value="all">All</option>
          <option value="active">Active</option>
          <option value="completed">Completed</option>
        </select>
      </div>
      <section
        className="mx-auto max-h-[75svh] max-w-3xl overflow-y-auto scrollbar-thin scrollbar-thumb-slate-500 scrollbar-track-white rounded-lg border border-slate-300 bg-white p-5 shadow-xl shadow-slate-900/10"
        aria-label="Action items"
      >
        {filteredActionItems.length === 0 ? (
            <h2 className="m-0 py-12 text-center text-base font-semibold text-slate-950">
              {`No ${statusFilter !== "all" ? statusFilter : ""} action items found`}
            </h2>
        ) : (
          <ul className="grid list-none gap-3 p-0">
            {filteredActionItems.map((item) => (
              <ActionItemRow item={item} key={item.id} onToggleStatus={handleToggleStatus} />
            ))}
          </ul>
        )}
      </section>
    </main>
  )
}

export default App
