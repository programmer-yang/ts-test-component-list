import * as React from "react";
import "./index.css";

interface dataItem {
  key: string;
  value: string;
}

interface ListProps {
  data: dataItem[];
}

declare class List extends React.Component<ListProps> {
  render(): JSX.Element;
}
