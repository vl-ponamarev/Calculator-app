import { Button, Tooltip } from 'antd'
import React from 'react'


export const ButtonCalc = ({
    tooltipText,
    icon = false,
    shape = 'default',
    ...arg }) => {

    return (
        <Tooltip title={tooltipText ? tooltipText : null}>
            <Button
                size="large"
                type="primary"
                shape={shape}
                icon={icon ? icon : null}
                {...arg}
            />

        </Tooltip>
    )
}
