import _ from "lodash";

export const getInfoData = ({
  fields = [],
  object = {},
}: {
  fields?: string[];
  object?: Record<string, any>;
}) => {
  return _.pick(object, fields);
};
