// npm install ink-gradient
// npm install ink-big-text

import React from 'react';
import {render} from 'ink';
import Gradient from 'ink-gradient';
import BigText from 'ink-big-text';

render(
	<Gradient name="rainbow">
		<BigText text="CS3710!"/>
	</Gradient>
);
