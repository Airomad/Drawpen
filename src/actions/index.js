export const SELECT_TOOL = 'SELECT_TOOL';

export function selectTool(toolId) {
  return {
    type: SELECT_TOOL,
    toolId
  }
}
