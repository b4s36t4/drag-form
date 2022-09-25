declare interface Properties {
  title?: string;
  style?: string;
  placeholder?: string;
  label?: string;
}

declare interface Component {
  type: string;
  id: string;
  properties: Properties;
}
