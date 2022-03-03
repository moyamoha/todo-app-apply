import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import registerUser from "../redux/api/registerUser";
import ErrorAlert from "./ErrorAlert";

export default function SignupForm() {
	const error = useSelector((state) => state.user.error);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [formData, setFormData] = useState({
		username: "",
		email: "",
		password1: "",
		password2: "",
		firstname: "",
		lastname: "",
	});

	const handleChange = useCallback(
		(e) => {
			const name = e.target.name;
			const newFormData = {
				...formData,
			};
			newFormData[name] = e.target.value;
			setFormData(newFormData);
		},
		[formData]
	);

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(registerUser(formData));
		navigate("/signup");
	};

	return (
		<>
			<ErrorAlert error={error}></ErrorAlert>
			<form method="POST" onSubmit={handleSubmit}>
				<div className="form-group d-flex justify-content-between gap-3">
					<div style={{ width: "48%" }}>
						<label for="firstname">First name</label>
						<input
							type="text"
							name="firstname"
							className="form-control"
							id="firstname"
							value={formData.firstname}
							onChange={handleChange}
						></input>
					</div>
					<div style={{ width: "48%" }}>
						<label for="lastname">Last name</label>
						<input
							type="text"
							name="lastname"
							value={formData.lastname}
							className="form-control"
							onChange={handleChange}
							id="lastname"
						></input>
					</div>
				</div>
				<div className="form-group">
					<label for="username">Username</label>
					<input
						type="text"
						name="username"
						value={formData.username}
						className="form-control"
						onChange={handleChange}
						id="username"
						required
						aria-describedby="usernameHelp"
					></input>
					<small id="usernameHelp" className="form-text text-muted">
						Your username must be unique. We'll let you know if someone has
						taken it already.
					</small>
				</div>
				<div className="form-group">
					<label for="email">Email</label>
					<input
						type="email"
						name="email"
						value={formData.email}
						className="form-control"
						onChange={handleChange}
						id="email"
					></input>
				</div>
				<div className="form-group">
					<label for="password1">Password</label>
					<input
						type="password"
						name="password1"
						value={formData.password1}
						onChange={handleChange}
						className="form-control"
						id="password1"
					></input>
				</div>
				<div className="form-group">
					<label for="password2">Confirm Password</label>
					<input
						type="password"
						name="password2"
						value={formData.password2}
						onChange={handleChange}
						className="form-control"
						id="password2"
					></input>
				</div>
				<button type="submit" className="btn btn-primary">
					Sign Up
				</button>
			</form>
		</>
	);
}
