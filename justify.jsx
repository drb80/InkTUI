import React from 'react';
import {render, Box, Text} from 'ink';

const Example = () => (
<>
<Box justifyContent="flex-start">
	<Text>X</Text>
</Box>

<Box justifyContent="center">
	<Text>X</Text>
</Box>

<Box justifyContent="flex-end">
	<Text>X</Text>
</Box>

<Box justifyContent="space-between">
	<Text>X</Text>
	<Text>Y</Text>
</Box>

<Box justifyContent="space-around">
	<Text>X</Text>
	<Text>Y</Text>
</Box>

<Box justifyContent="space-evenly">
	<Text>X</Text>
	<Text>Y</Text>
</Box>
</>
);

render(<Example />);
