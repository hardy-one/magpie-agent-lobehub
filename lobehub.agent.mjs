export const agent = {
  // LobeHub keeps its own provider list and the user points one at the
  // gateway, so magpie has no configuration of LobeHub's to write. The file
  // below is magpie's own record that this row is on; LobeHub never reads it.
  config: '~/.config/magpie/lobehub-agent.json',
  format: 'json',

  // No model key: LobeHub picks magpie's models itself, from the provider
  // the user adds there. The row then carries the switch alone, no model
  // picker that would write somewhere nothing reads.
  id: 'lobehub',
  name: 'LobeHub',
  ua: ['lobehub'],
};

export function connect({ gateway }) {
  return { 'magpie.gateway': gateway.v1 };
}
