import React, { Component } from 'react';
import { bool, node, shape, string } from 'prop-types';
import CheckIcon from 'react-feather/dist/icons/check';
import EditIcon from 'react-feather/dist/icons/edit-2';

import classify from 'src/classify';
import Icon from 'src/components/Icon';
import defaultClasses from './section.css';

const editIconAttrs = {
    color: 'black',
    width: 18
};
const EDIT_ICON = <Icon src={EditIcon} attrs={editIconAttrs} />;

class Section extends Component {
    static propTypes = {
        classes: shape({
            content: string,
            icon: string,
            label: string,
            root: string,
            summary: string
        }),
        isClickable: bool,
        label: node,
        showEditIcon: bool
    };

    render() {
        const {
            children,
            classes,
            isClickable,
            label,
            showEditIcon,
            ...restProps
        } = this.props;

        if (!isClickable) {
            delete restProps.onClick;
        }

        const icon = showEditIcon ? EDIT_ICON : null;

        return (
            <button className={classes.root} {...restProps}>
                <span className={classes.content}>
                    <span className={classes.label}>
                        <span>{label}</span>
                    </span>
                    <span className={classes.summary}>{children}</span>
                    <span className={classes.icon}>{icon}</span>
                </span>
            </button>
        );
    }
}

export default classify(defaultClasses)(Section);
