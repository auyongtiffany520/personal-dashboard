// The workbenches the owner switches between: one personal, three companies. Each keeps its own
// Excel, task decisions, calendar notes and AI analysis in this browser (storage/local-state.js
// createStateStore({ workspace })). Names are shown as they are; `zh` is the Chinese label.

export const WORKSPACES = Object.freeze([
  { id: 'personal', name: 'Personal', zh: '个人工作台' },
  { id: 'nutri-noodle', name: 'Nutri Noodle Enterprise', zh: 'Nutri Noodle Enterprise' },
  { id: 'lbm-puchong', name: 'LBM Puchong Sdn Bhd', zh: 'LBM Puchong Sdn Bhd' },
  { id: 'her-asia', name: 'Her_Asia', zh: 'Her_Asia' },
]);

export const DEFAULT_WORKSPACE = WORKSPACES[0].id;

export function findWorkspace(id) { return WORKSPACES.find(w => w.id === id) || WORKSPACES[0]; }
