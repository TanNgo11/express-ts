import keyTokenModel from "../models/keytoken.model";

class KeyTokenService {
  static readonly createKeyToken = async ({
    userId,
    publicKey,
    privateKey,
  }) => {
    try {
      const tokens = await keyTokenModel.create({
        user: userId,
        publicKey: publicKey,
        privateKey: privateKey,
      });

      return tokens ? tokens?.publicKey : null;
    } catch (error) {
      return error;
    }
  };
}

export default KeyTokenService;
