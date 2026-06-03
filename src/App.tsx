function App() {
  const items = [
    'Test 1',
    'Test 2',
    'Test 3',
  ]

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
          {items.map((item) => (
            <li
              className="rounded-md border border-slate-200 bg-slate-50 px-4 py-3.5 text-left"
              key={item}
            >
              {item}
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}

export default App
