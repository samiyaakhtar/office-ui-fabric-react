import * as React from 'react';
import { DashboardGridLayout } from '../DashboardGridLayout';
import { DashboardGridBreakpointLayouts, Size } from '../DashboardGridLayout.types';
import { CardSize, Priority, CardContentType } from '../../Card/Card.types';
import { Card } from '../../Card';
import { IThumbnailItemProps } from '../../Card/ThumbnailList/ThumbnailList.types';
import { IAction } from '../../Card/ActionBar/ActionBar.types';
import { ChartType } from '../../Card/Chart/Chart.types';
import { Section } from '../../Section/Section';

export class DashboardGridLayoutSectionsExample extends React.Component<{}, {}> {
  public render(): JSX.Element {
    const cardFrameContent = {
      cardTitle: 'Example Card',
      cardDropDownOptions: [
        {
          key: 'Remove',
          name: 'Remove',
          icon: 'PageRemove',
          ariaLabel: 'Remove card',
          title: 'Remove card',
          onClick: () => {
            alert('Remove clicked');
          }
        }
      ]
    };
    const thumbnailItems: IThumbnailItemProps[] = [
      {
        imageSource: './src/images/download.jpg',
        subheaderText: 'First item',
        description: 'This is the first thumbnail item',
        handleThumbnailItemClick: () => {
          alert('First Item clicked');
        }
      },
      {
        imageSource: './src/images/download.jpg',
        subheaderText: 'Second item',
        description: 'Lorem ipsum dolor sit amet, ',
        handleThumbnailItemClick: () => {
          alert('Second Item clicked');
        }
      }
    ];

    const actions: IAction[] = [
      {
        title: 'Action 1',
        action: () => {
          alert('Action1 clicked');
        }
      },
      {
        title: 'Action 2',
        action: () => {
          alert('Action2 clicked');
        }
      },
      {
        title: 'Action 3',
        action: () => {
          alert('Action3 clicked');
        }
      }
    ];

    const contentAreaList = [
      {
        priority: Priority.Priority1,
        cardContentType: CardContentType.BodyText,
        content: {
          subHeaderText: 'Subheader Text',
          bodyText: 'Body Text'
        }
      },
      {
        priority: Priority.Priority2,
        cardContentType: CardContentType.ThumbnailList,
        content: {
          thumbnailItems: thumbnailItems
        }
      }
    ];

    const datapoints = [
      { x: 0, y: 10 },
      { x: 6, y: 18 },
      { x: 12, y: 36 },
      { x: 21, y: 20 },
      { x: 29, y: 46 },
      { x: 34, y: 25 },
      { x: 40, y: 13 },
      { x: 48, y: 43 },
      { x: 57, y: 30 },
      { x: 64, y: 45 },
      { x: 72, y: 12 },
      { x: 78, y: 50 },
      { x: 85, y: 25 },
      { x: 90, y: 43 },
      { x: 96, y: 22 },
      { x: 100, y: 19 }
    ];

    const largeContentAreaList = [
      {
        priority: Priority.Priority2,
        cardContentType: CardContentType.ThumbnailList,
        content: {
          thumbnailItems: thumbnailItems
        }
      },
      {
        priority: Priority.Priority1,
        cardContentType: CardContentType.Chart,
        content: {
          chartLabel: 'My first chart!',
          chartType: ChartType.VerticalBarChart,
          data: datapoints,
          colors: ['red', 'yellow']
        }
      }
    ];

    const mediumTallContentAreaList = [
      {
        priority: Priority.Priority1,
        cardContentType: CardContentType.Chart,
        content: {
          chartLabel: 'My first chart!',
          chartType: ChartType.VerticalBarChart,
          data: datapoints,
          colors: ['red', 'yellow']
        }
      }
    ];

    const header = {
      headerText: 'Header Text ',
      annotationText: 'Annotation Text '
    };
    return (
      <DashboardGridLayout isDraggable={true} layout={this._generateLayout()}>
        <div key="0">
          <Card
            cardFrameContent={cardFrameContent}
            header={header}
            cardContentList={contentAreaList}
            cardSize={CardSize.small}
          />
        </div>
        <div key="1">
          <Card
            cardFrameContent={cardFrameContent}
            header={header}
            cardContentList={mediumTallContentAreaList}
            cardSize={CardSize.mediumTall}
            actions={actions}
          />
        </div>
        <div key="2">
          <Card
            cardFrameContent={cardFrameContent}
            header={header}
            cardContentList={contentAreaList}
            cardSize={CardSize.small}
          />
        </div>
        <div key="3.5">
          <Section title="This is a section title" removeTitle="Remove this section" />
        </div>
        <div key="3">
          <Card
            cardFrameContent={cardFrameContent}
            header={header}
            cardContentList={contentAreaList}
            cardSize={CardSize.mediumWide}
            actions={actions}
          />
        </div>
        <div key="4">
          <Card
            cardFrameContent={cardFrameContent}
            header={header}
            cardContentList={largeContentAreaList}
            cardSize={CardSize.large}
            actions={actions}
          />
        </div>
      </DashboardGridLayout>
    );
  }

  private _generateLayout(): DashboardGridBreakpointLayouts {
    return {
      lg: [
        { i: '0', y: 0, x: 0, size: Size.small },
        { i: '1', y: 0, x: 1, size: Size.mediumTall },
        { i: '2', y: 1, x: 0, size: Size.small },
        { i: '3', y: 0, x: 2, size: Size.mediumWide },
        { i: '3.5', y: 0, x: 2, size: Size.section },
        { i: '4', y: 1, x: 2, size: Size.large }
      ]
    };
  }
}