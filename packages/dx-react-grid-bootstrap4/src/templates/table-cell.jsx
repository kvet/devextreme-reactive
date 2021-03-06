import * as React from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';
import './table-cell.css';

export const TableCell = ({
  column, value, children,
  tableRow, tableColumn, row,
  className, ...restProps
}) => (
  <td
    className={classNames({
      'text-nowrap dx-rg-bs4-table-cell': true,
      'text-right': tableColumn && tableColumn.align === 'right',
      'text-center': tableColumn && tableColumn.align === 'center',
    }, className)}
    {...restProps}
  >
    {children || value}
  </td>
);

TableCell.propTypes = {
  value: PropTypes.any,
  column: PropTypes.object,
  row: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  tableRow: PropTypes.object,
  tableColumn: PropTypes.object,
  className: PropTypes.string,
};

TableCell.defaultProps = {
  value: undefined,
  column: undefined,
  row: undefined,
  children: undefined,
  tableRow: undefined,
  tableColumn: undefined,
  className: undefined,
};
