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
  {
    id: 6,
    title: 'Schedule design review',
    description: 'Find a time for product and engineering to review the new flow.',
    status: 'active',
    type: 'meeting',
    dueDate: '2026-06-11',
  },
  {
    id: 7,
    title: 'Confirm support handoff',
    description: 'Check that the customer issue has been transferred to support.',
    status: 'active',
    type: 'follow-up',
    dueDate: '2026-06-08',
  },
  {
    id: 8,
    title: 'Archive completed tickets',
    description: 'Move resolved inbox items out of the active work queue.',
    status: 'completed',
    type: 'task',
    dueDate: '2026-06-02',
  },
  {
    id: 9,
    title: 'Draft stakeholder update',
    description: 'Write a short progress note for the launch readiness thread.',
    status: 'active',
    type: 'email',
    dueDate: '2026-06-12',
  },
  {
    id: 10,
    title: 'Review bug triage notes',
    description: 'Scan the priority list and flag anything that needs escalation.',
    status: 'active',
    type: 'task',
    dueDate: '2026-06-09',
  },
  {
    id: 11,
    title: 'Finalize vendor response',
    description: 'Send the approved answer about pricing and implementation timing.',
    status: 'completed',
    type: 'email',
    dueDate: '2026-06-04',
  },
  {
    id: 12,
    title: 'Plan retro agenda',
    description: 'Collect discussion prompts and add them to the team retro doc.',
    status: 'active',
    type: 'meeting',
    dueDate: '2026-06-13',
  },
]
