export type Character = {
  name: string;
  fields: Field[];
};

interface IField {
  id: string | number;
  value;
  label: string;
}
export type Field = IField & (StringField | NumField);

export type stringFieldRequired = IField & {
  required: true;
  value: string;
};

export type StringFieldOptional = IField & {
  required: false;
  value: string | undefined;
};

export type StringField = { type: "string" } & (
  | stringFieldRequired
  | StringFieldOptional
);

export type NumFieldRequired = IField & {
  required: true;
  value: number;
};

export type NumFieldOptional = IField & {
  required: false;
  value: number | undefined;
};

export type NumField = { type: "num" } & (NumFieldOptional | NumFieldRequired);

// regenerate enums at runtime for "pick one of x" fields?
// seems like more work than just having an options array
