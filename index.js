var uuid4 = require('uuid4');

module.exports = function(blueprint) {

  var collection = {
    id: uuid4(),
    name: blueprint.name,
    description: blueprint.description,
    order: [],
    folders: [],
    timestamp: Date.now(),
    synced: false,
    owner: 0, //"57819"
    sharedWithTeam: false,
    subscribed: false,
    remoteLink: '',
    public: false,
    write: false,
    requests: []
  };

  var host, requests;

  blueprint.metadata.forEach(function(meta) {
    if (meta.name === 'HOST') {
      host = meta.value;
    }
  });

  blueprint.resourceGroups.forEach(function(resourceGroup) {
    var folder = {
      id: uuid4(),
      name: resourceGroup.name,
      description: resourceGroup.description,
      write: false,
      order: [],
      collection_name: collection.name,
      collection_owner: collection.owner,
      collection_id: collection.id,
      collection: collection.id,
      owner: collection.owner,
    };

    collection.folders.push(folder);

    resourceGroup.resources.forEach(function(resource) {
      resource.actions.forEach(function(action) {

        var request = {
          id: uuid4(),
          url: host + parseURI(resource, action),
          name: resource.uriTemplate,
          method: action.method,
          collectionId: collection.id
        };

        folder.order.push(request.id);
        collection.requests.push(request);

      });
    });
  });

  return collection;

};

function parseURI(resource, action) {
  var uri = resource.uriTemplate;

  if (hasQueryParams(uri)) {
    uri = replaceQueryParams(uri, action.parameters);
  }

  if (hasURIParams(uri)) {
    uri = replaceURIParams(uri, action.parameters);
  }

  return uri;
}

function hasQueryParams(uri) {
  return false;
};

function replaceQueryParams(uri, parameters) {
  return uri;
};

function hasURIParams(uri) {
  return false;
};

function replaceURIParams(uri, parameters) {
  return uri;
};
