import { useState, useEffect } from 'react';
import axios from 'axios';

const useResource = (resource) => {
  const [ resources, setResources ] = useState([]);
  const [isloading, setIsLoading] = useState(true);

	useEffect(
		() => {
			(async () => {
				const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);
        setResources(response.data);
			})();
		},
		[ resource ]
  );

	return resources;
};

export default useResource;
