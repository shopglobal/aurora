/**
 * A controller with actions that would be useful during testing and development.
 */

module.exports = {
  ok: function(req, res) {
    res.ok();
  },
  mcJoinError: function(req, res) {
    res.send(500);
  }
}