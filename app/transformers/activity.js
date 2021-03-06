var Mystique = require('mystique');

var ActivityTransformer = Mystique.Transformer.extend({
  resourceName: 'activity',
  mapOut: function(activity) {
    return {
      id: activity.id,
      name: activity.name,
      description: activity.description,
      linkUrl: activity.linkUrl,
      pictureUrl: activity.pictureUrl,
      category: activity.category,
      team: activity.team,
    };
  },

  mapIn(req) {
    return {
      name: req.getJson('activity.name'),
      description: req.getJson('activity.description'),
      linkUrl: req.getJson('activity.linkUrl'),
      pictureUrl: req.getJson('activity.pictureUrl'),
      category: req.getJson('activity.category'),
      team: req.getJson('activity.team'),
    };
  },
});

Mystique.registerTransformer('Activity', ActivityTransformer);
