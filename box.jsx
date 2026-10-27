import React from 'react';
import {render, Box, Text} from 'ink';

const Example = () => (
	<Box margin={2} borderStyle="round">
		<Text>This is a box with margin</Text>
	</Box>
);

render(<Example />);
