"use client";

import { Button } from "@repo/ui/src/button";
import React from "react";
import { signIn } from "../server/auth";

function SignIn() {
	return (
		<Button className="mt-4" onClick={async () => await signIn("github")}>
			Login with Github
		</Button>
	);
}

export default SignIn;
