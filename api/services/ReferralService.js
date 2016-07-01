'use strict';

/**
 * The list of rewards and the number of successful invites someone needs to
 * earn the reward.
 */
var REWARDS = [
  {
    count: 10,
    reward: 'Shine sticker',
  },
  {
    count: 30,
    reward: 'Shine tote',
  },
  {
    count: 50,
    reward: 'Shine t-shirt',
  },
  {
    count: 100,
    reward: 'Shine hoodie',
  },
];

module.exports = {

  /**
   * Gets the text to display that to tease the next level of rewards.
   *
   * @param count Number of referrals
   * @return String for the teaser text
   */
  getNextLevelTeaser: function(count) {
    for (let i = 0; i < REWARDS.length; i++) {
      if (count >= REWARDS[i].count) {
        continue;
      }
      else {
        let numMore = REWARDS[i].count - count;
        let strFriends = numMore == 1 ? 'friend' : 'friends';
        return 'Invite ' + numMore + ' more ' + strFriends + ' to get a ' + REWARDS[i].reward + '!';
      }
    }

    // Return empty string for people who've reached the max tier or if there's
    // some sort of error
    return '';
  },

};