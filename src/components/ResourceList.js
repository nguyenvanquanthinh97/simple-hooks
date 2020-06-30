import React from 'react';

import useResource from './useResouce';

const ResourceList = ({ resource }) => {
	const resources = useResource(resource);

	return <div>{resources.map((resource) => <li key={resource.id}>{resource.title}</li>)}</div>;
};

export default ResourceList;
