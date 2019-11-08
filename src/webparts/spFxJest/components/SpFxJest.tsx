import * as React from 'react';
import styles from './SpFxJest.module.scss';
import { ISpFxJestProps } from './ISpFxJestProps';


export default class SpFxJest extends React.Component<ISpFxJestProps, {}> {
  public render(): React.ReactElement<ISpFxJestProps> {
    return (
      <div className={styles.spFxJest}>
      <div className={styles.container}>
        <div className={styles.row}><span><u><b>List Item(s)</b></u></span></div>
        <div className={styles.row}>
          <div className={styles.column}>
            <ul>
              {this.props.ListItem.map((item, i) => { return <li key={item.Title}>{item.Title}</li>; })}
            </ul>
          </div>
        </div>
      </div>
    </div>
    );
  }
}
