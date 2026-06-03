import { mockActionItems } from './mockData'

function App() {

  return (
    <main className="min-h-svh bg-slate-50 px-5 py-8 text-slate-950">
      <header className="mx-auto mb-6 max-w-3xl border-b border-slate-300 pb-4">
        <h1>
          Mini Action Inbox
        </h1>
      </header>

      <section
        className="mx-auto max-w-3xl rounded-lg border border-slate-300 bg-white p-5 shadow-xl shadow-slate-900/10"
        aria-label="Action items"
      >
        <ul className="grid list-none gap-3 p-0">
          {mockActionItems.map((item) => (
            <li
              className="rounded-md border border-slate-200 bg-slate-50 px-4 py-3.5 text-left"
              key={item.id}
            >
              <div className="flex gap-3 flex-row items-start justify-between">
                <div className="min-w-0">
                  <h2 className="m-0 text-base font-semibold text-slate-950">
                    {item.title}
                  </h2>
                  <p className="mt-1 text-sm text-slate-600">
                    {item.description}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm min-w-64">
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
          ))}
        </ul>
      </section>
    </main>
  )
}

export default App
