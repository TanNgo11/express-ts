import AccessService from "../services/access.service";

class AccessController {
  signUp = async (req, res, next) => {
    return res.status(201).json(await AccessService.signUp(req.body));
  };
}

export default new AccessController();
