import React from 'react';
import { render } from '@testing-library/react';

import Index from '../pages/index';

describe('Index', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Index
        q="animals"
        animals={[
          {
            name: 'Lion',
            species: 'Wild Animal(mammal)',
            description:
              'Living in the grasslands, scrub, and open woodlands of sub-Saharan Africa, the lion is the second largest cat in the world. It is dwarfed slightly by the tiger, which is closely related and has a very similar body typeUnlike other cats, lions are very social animals. They live in groups, called prides, of around 30 lions. A pride consists of up to three males, a dozen related females, and their young. The size of the pride is determined by the availability of food and water. If resources are scarce, the pride becomes smallerPride members keep track of one another by roaring. Both males and females have a very powerful roar that can be heard up to 8 km (5 mi. away.Males and females take on very different roles in the pride. Male lions spend their time guarding their territory and their cubs. They maintain the boundaries of their territory, which can be as large as 260 sq. km (100 sq. mi.), by roaring, marking it with urine, and chasing off intruders. Their thick manes, a unique trait to male lions, protect their necks when they fight with challengers.',
            thumbnail: 'https://s25.postimg.org/88ypx1fgb/lion_thumbnails.jpg',
            image: 'https://s25.postimg.org/55ot26lq7/lion_large.jpg',
          },
        ]}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
