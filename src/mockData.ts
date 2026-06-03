export type ActionItemStatus = 'active' | 'completed'

export type ActionItemType = 'email' | 'task' | 'meeting' | 'follow-up'

export type ActionItem = {
  id: number
  title: string
  description: string
  status: ActionItemStatus
  type: ActionItemType
  dueDate: string
}

export const mockActionItems: ActionItem[] = [
  {
    id: 1,
    title: 'Reply to client proposal',
    description: 'Review the latest proposal notes and send a clear response.',
    status: 'active',
    type: 'email',
    dueDate: '2026-06-05',
  },
  {
    id: 2,
    title: 'Prepare sprint planning notes',
    description: 'Collect backlog priorities and draft discussion points.',
    status: 'active',
    type: 'meeting',
    dueDate: '2026-06-06',
  },
  {
    id: 3,
    title: 'Check invoice approval',
    description: 'Confirm whether the pending invoice has the required sign-off.',
    status: 'completed',
    type: 'follow-up',
    dueDate: '2026-06-07',
  },
  {
    id: 4,
    title: 'Update onboarding checklist',
    description: 'Add the missing setup steps for new project contributors.',
    status: 'active',
    type: 'task',
    dueDate: '2026-06-10',
  },
  {
    id: 5,
    title: 'Send weekly summary',
    description: 'Summarize completed work, open questions, and next actions.',
    status: 'completed',
    type: 'email',
    dueDate: '2026-06-03',
  },
]
