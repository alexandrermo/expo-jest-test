import { render } from '@testing-library/react-native';
import { ExternalLink } from './external-link';

describe('link', () => {
    it('makes a default test', () => {
        render(<ExternalLink href={'teste'} />)

        expect(true).toBeTruthy()
    })
})