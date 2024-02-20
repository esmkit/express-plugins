import { AccessControl } from "accesscontrol";

export default function (action, resource) {
	return async (req, res, next) => {
		try {
			const grants = new AccessControl(req.user.grants);
			const permission = grants.can(req.user.roles)[action](resource);
			if (!permission.granted) {
				return res.status(401).json({
					error: "You don't have enough permission to perform this action",
				});
			}
			next();
		} catch (error) {
			next(error);
		}
	};
}

export { AccessControl };
