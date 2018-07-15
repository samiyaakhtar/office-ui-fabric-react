import { ISectionStyles } from './Section.types';

export const getStyles = (): ISectionStyles => {
  return {
    root: {
      fontSize: '14px',
      fontWeight: '600',
      borderTop: '1px solid rgba(0,0,0,.2)',
      fontFamily:
        '"Segoe UI", "Segoe UI Web (West European)", "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif',
      width: '100%',
      backgroundColor: 'transparent',
      padding: '13px',
      position: 'relative'
    },
    actions: {
      position: 'absolute',
      top: '8px',
      right: '0px',
      display: 'inline-block',
      whiteSpace: 'nowrap'
    },
    actionButton: {
      display: 'inline-block'
    }
  };
};