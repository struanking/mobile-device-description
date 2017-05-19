import Document, { Head, Main, NextScript } from 'next/document'
import styleSheet from 'styled-components/lib/models/StyleSheet'
import { injectGlobal } from 'styled-components';

const primaryBgColor = '#35322A';
const primaryBg = `background-color: ${primaryBgColor};`;
const primaryTextColor = '#D6C47D';
const primaryText = `color: ${primaryTextColor};`;
const noBorder = 'border: none;';

injectGlobal`
:root {
	--black: #000;
	--near-black: #111;
	--dark-gray:#333;
	--mid-gray:#555;
	--gray: #777;
	--silver: #999;
	--light-silver: #aaa;
	--moon-gray: #ccc;
	--light-gray: #eee;
	--near-white: #f4f4f4;
	--white: #fff;

	--dark-red: #f00008;
	--red: #ff3223;
	--orange: #f3a801;
	--gold: #f2c800;
	--yellow: #ffde37;
	--purple: #7d5da9;
	--light-purple: #8d4f92;
	--hot-pink: #d62288;
	--dark-pink: #c64774;
	--pink: #f49cc8;
	--dark-green: #006C71;
	--green: #41D69F;
	--navy: #001b44;
	--dark-blue: #00449e;
	--blue: #357edd;
	--light-blue: #96ccff;
	--lightest-blue: #cdecff;
	--washed-blue: #f6fffe;
	--washed-green: #e8fdf5;
	--washed-yellow: #fff8d5;
	--light-pink: #efa4b8;
	--light-yellow: #f3dd70;
	--light-red: #ffd;

	--transparent:transparent;

	--black-90: rgba(0,0,0,.9);
	--black-80: rgba(0,0,0,.8);
	--black-70: rgba(0,0,0,.7);
	--black-60: rgba(0,0,0,.6);
	--black-50: rgba(0,0,0,.5);
	--black-40: rgba(0,0,0,.4);
	--black-30: rgba(0,0,0,.3);
	--black-20: rgba(0,0,0,.2);
	--black-10: rgba(0,0,0,.1);
	--black-05: rgba(0,0,0,.05);
	--black-025: rgba(0,0,0,.025);
	--black-0125: rgba(0,0,0,.0125);

	--white-90: rgba(255,255,255,.9);
	--white-80: rgba(255,255,255,.8);
	--white-70: rgba(255,255,255,.7);
	--white-60: rgba(255,255,255,.6);
	--white-50: rgba(255,255,255,.5);
	--white-40: rgba(255,255,255,.4);
	--white-30: rgba(255,255,255,.3);
	--white-20: rgba(255,255,255,.2);
	--white-10: rgba(255,255,255,.1);
	--white-05: rgba(255,255,255,.05);
	--white-025: rgba(255,255,255,.025);
	--white-0125: rgba(255,255,255,.0125);

	--spacing-none: 0;
	--spacing-extra-small: .25rem;
	--spacing-small: .5rem;
	--spacing-medium: 1rem;
	--spacing-large: 2rem;
	--spacing-extra-large: 4rem;
	--spacing-extra-extra-large: 8rem;
	--spacing-extra-extra-extra-large: 16rem;
	}

	body {
		font: normal 1em/1.5 "Helvetica Neue", sans-serif;
		padding: 0;
		margin: 0;
	}

	[data-reactroot] > div {
		display: grid;
		grid-template-rows: min-content min-content 1fr;
		grid-template-columns: 1fr 0em;
	}

	header[role="banner"] {
		grid-row: 1;
		grid-column: 1;
	}

	#main {
		grid-row: 2;
		grid-column: 1;
	}

	#sidebar  {
		grid-row: 3;
		grid-column: 1;
	}

	footer {
		grid-row: 4;
		grid-column: 1;
	}

  button[type="submit"] {
		${primaryBg}
		${primaryText}
    ${noBorder}
	}

  input + button {
    margin-left: 1em;
  }

	.fukol-grid {
	  display: flex; /* 1 */
	  flex-wrap: wrap; /* 2 */
	  margin: -0.5em; /* 5 (edit me!) */
	}

	.fukol-grid > * {
	  flex: 1 0 5em; /* 3 (edit me!) */
	  margin: 0.5em; /* 4 (edit me!) */
	}
`;

export default class MyDocument extends Document {
  static async getInitialProps ({ renderPage }) {
    const page = renderPage()
    const styles = (
      <style dangerouslySetInnerHTML={{ __html: styleSheet.rules().map(rule => rule.cssText).join('\n') }} />
    )
    return { ...page, styles }
  }

  render () {
    return (
      <html>
        <Head>
          <title>My page</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
