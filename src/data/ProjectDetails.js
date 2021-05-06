import React, { Fragment } from "react";
import pcPrejanVid from './media/pcPrejan2.mp4';

export const ucDetails = <Fragment>
	<h5 className="topic-label">add sub label here</h5>
	<p>add description and whatnot here</p>
	<h4 className="label">Add Video and change this label or remove if not needed</h4>
	<video controls style={ {
		marginTop: '14px'
	} }>
		<source src={ pcPrejanVid } type="video/mp4" />
		<source src={ pcPrejanVid } type="video/ogg" />
		Your browser does not support the video tag.
	</video>
</Fragment>
