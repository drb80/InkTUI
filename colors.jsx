import React from 'react';
import {render, Box, Text} from 'ink';

const Example = () => (
<>
<Box flexDirection="column">
	<Box backgroundColor="red" width={20} height={5}>
		<Text>Red background</Text>
	</Box>

	<Box backgroundColor="#FF8800" width={20} height={3}>
		<Text>Orange background</Text>
	</Box>

	<Box backgroundColor="rgb(0, 255, 0)" width={20} height={3}>
		<Text>Green background</Text>
	</Box>
</Box>
</>
);

render(<Example />);
