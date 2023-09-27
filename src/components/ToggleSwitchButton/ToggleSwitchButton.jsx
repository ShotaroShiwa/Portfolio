import React from 'react'
import styled from "styled-components";

const StyledToggleSwitchButton = styled.div`
& input {
		display: none;
		&:checked + label {
			background-color: #393c63;
			&::before {
				left: 2em;
			}
		}
	}

	& label {
		background-color: #d1d7b1;
		border-radius: 2em;
		border: 1px solid var(--text-color);
		display: flex;
		align-items: center;
		justify-content: space-around;
		height: 2em;
		position: relative;
		transition: .5s;
		width: 3.75em;
		top:7px;

		&::before {
			background: #fff;
			border-radius: 100%;
			content: '';
			display: inline-block;
			height: 1.5em;
			position: absolute;
			left: 0.25em;
			transition: .5s ease-out;
			width: 1.5em;
			z-index: 2;
		}
	}

	@media (max-width:640px){
		transform:scale(0.7);
		margin-top: 9px;
    margin-right: 40px;
	}
`
const ToggleSwitchButton = React.forwardRef((props, ref) => {
	const { className, handleChange } = props;

	return (
		<StyledToggleSwitchButton className={className}>
			<input id='btn-mode' type="checkbox" onChange={handleChange} ref={ref} />
			<label htmlFor="btn-mode"></label>
		</StyledToggleSwitchButton>
	);
});

export default ToggleSwitchButton
