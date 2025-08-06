// api/index.js

// Import the Telegraf library. 'dotenv' is not strictly needed here for Vercel,
// as environment variables are set directly in Vercel's dashboard, but it's good practice
// for local development if you were to run this file directly.
const { Telegraf } = require('telegraf');

// Initialize the bot with the BOT_TOKEN. Vercel will inject this from your environment variables.
const bot = new Telegraf(process.env.BOT_TOKEN);

// --- Global Middleware ---
// This middleware ensures that all bot replies use MarkdownV2 for professional formatting
// and disables web page previews for a cleaner look, especially for links.
bot.use(async (ctx, next) => {
  ctx.replyWithMarkdown = (text, extra) => ctx.reply(text, { parse_mode: 'MarkdownV2', disable_web_page_preview: true, ...extra });
  await next();
});

// --- Bot Commands ---

// The /start command: Your bot's initial greeting and a concise overview for the bank.
// It sets the tone and introduces the core value proposition.
bot.start(async (ctx) => {
  const welcomeMessage = `
*Welcome to myTeleScopeBot – Your Premier Partner in Digital Advertising Contracts.*

We specialize in connecting advertisers with highly engaged Telegram communities through a transparent and secure contractual framework. Our platform leverages advanced AI for precision targeting and ensures compliance with all regulatory standards.

To understand the full scope of our services and operational integrity, please explore the commands below.
  `;
  await ctx.replyWithMarkdown(welcomeMessage);
  await ctx.replyWithMarkdown(`For a comprehensive overview of our services and business model, please visit our official landing page: /website`);
  await ctx.replyWithMarkdown(`To navigate our features, use the /help command.`);
});

// The /help command: Provides a detailed, contract-focused list of the bot's simulated features.
// Each command is explained in a way that highlights professionalism and business processes.
bot.help(async (ctx) => {
  const helpMessage = `
*myTeleScopeBot: Contract-Oriented Features Overview*

Our bot serves as the primary interface for managing your advertising agreements and ensuring campaign success.

*Key Commands:*
•   /website - Access our official corporate landing page for detailed business information and case studies.
•   /campaign_overview - Understand our structured campaign types and the contractual terms associated with each.
•   /ad_creation - Learn about our ad content creation process, emphasizing compliance and contractual adherence.
•   /payment_flow - Review our secure payment processing protocols and auditable transaction records.
•   /payout_schedule - Examine the transparent payout mechanisms for our community partners, based on agreed-upon contracts.
•   /compliance - Discover our robust anti-ban and content moderation policies, ensuring legal and ethical advertising.
•   /contact_sales - Connect directly with our sales team for partnership inquiries and detailed contract discussions.

Our commitment is to provide a reliable, auditable, and high-performance advertising solution.
  `;
  await ctx.replyWithMarkdown(helpMessage);
});

// /website command: Directly links to your deployed landing page.
// This is crucial for connecting the bot to the external professional website.
bot.hears('/website', async (ctx) => {
  const landingPageUrl = 'https://telescope-landing-page.vercel.app/';
  const message = `
*Official TeleScope Landing Page:*
Explore our business model, market impact, and technological advantages in detail on our corporate website: [TeleScope Official Website](${landingPageUrl})
  `;
  await ctx.replyWithMarkdown(message);
});

// /campaign_overview command: Simulates understanding of campaign types and contractual terms.
bot.hears('/campaign_overview', async (ctx) => {
  const message = `
*Campaign Contractual Overview:*

We offer structured advertising campaigns tailored to specific market segments, each governed by clear contractual terms to ensure mutual benefit and predictable outcomes.

•   *Crypto Sphere:* Targeted campaigns for blockchain, DeFi, and cryptocurrency projects. Contracts define reach, duration, and compliance with financial regulations.
•   *Gaming Sphere:* High-engagement campaigns for game developers, eSports organizations, and gaming communities. Agreements specify audience demographics and performance metrics.
•   *Fitness Sphere:* Focused advertising for health, wellness, and nutrition brands. Contracts ensure content aligns with health standards and ethical promotion.

Each campaign is initiated with a formal agreement outlining deliverables, performance indicators, and payment schedules.
  `;
  await ctx.replyWithMarkdown(message);
});

// /ad_creation command: Details the ad creation process, emphasizing compliance and AI integration.
bot.hears('/ad_creation', async (ctx) => {
  const message = `
*Ad Content Creation & Compliance:*

Our platform facilitates the creation of compelling ad content while strictly adhering to contractual guidelines and regulatory compliance.

1.  *Submission:* Advertisers submit their core message and assets.
2.  *AI-Powered Review:* Our proprietary AI analyzes content for brand safety, relevance, and compliance with Telegram's terms of service and our internal ethical guidelines.
3.  *Anti-Ban Integration:* Ads are processed through our advanced anti-ban system to ensure uninterrupted delivery and protect campaign integrity.
4.  *Approval & Contractual Terms:* Upon successful review, the ad is approved, and its distribution terms are formalized within your campaign contract.

This rigorous process safeguards both advertiser reputation and platform integrity.
  `;
  await ctx.replyWithMarkdown(message);
});

// /payment_flow command: Explains the secure and auditable payment process.
bot.hears('/payment_flow', async (ctx) => {
  const message = `
*Secure Payment & Auditable Transactions:*

Our payment infrastructure is designed for security, transparency, and ease of auditing, crucial for financial institutions.

•   *Multi-Currency Support:* We accept various cryptocurrencies (e.g., USDT) and traditional payment methods.
•   *Automated Processing:* Payments are processed automatically upon contract initiation, ensuring immediate campaign activation.
•   *Transaction Records:* Every transaction is meticulously recorded and accessible for audit purposes, providing a clear financial trail.
•   *Fraud Prevention:* Advanced security measures are in place to detect and prevent fraudulent activities.

Our system ensures that all financial interactions are secure, transparent, and fully compliant with industry standards.
  `;
  await ctx.replyWithMarkdown(message);
});

// /payout_schedule command: Explains the transparent payout mechanisms for partners.
bot.hears('/payout_schedule', async (ctx) => {
  const message = `
*Transparent Payouts for Community Partners:*

We ensure timely and transparent remuneration for our community partners (group owners) based on their contractual agreements for hosting ads.

•   *Weekly Settlements:* Earnings are calculated and settled weekly, ensuring consistent cash flow for our partners.
•   *Performance-Based:* Payouts are directly linked to ad delivery and engagement metrics, as defined in each group's contract.
•   *Auditable Reports:* Partners receive detailed reports outlining their earnings, allowing for full transparency and reconciliation.
•   *Secure Withdrawals:* Funds are securely transferred to designated cryptocurrency wallets (e.g., TRC20 addresses).

Our payout system reflects our commitment to fair and reliable partnerships.
  `;
  await ctx.replyWithMarkdown(message);
});

// /compliance command: Highlights the anti-ban, content moderation, and legal adherence.
bot.hears('/compliance', async (ctx) => {
  const message = `
*Regulatory Compliance & Platform Integrity:*

Our operational framework is built on a foundation of strict compliance and ethical practices, crucial for long-term sustainability and trust.

•   *AI Anti-Ban System:* Our proprietary technology proactively adapts to platform changes, ensuring uninterrupted ad delivery without violating terms of service.
•   *Content Moderation:* All ad content undergoes rigorous human and AI-driven moderation to prevent the dissemination of inappropriate, misleading, or illegal material.
•   *Data Privacy:* We adhere to stringent data protection protocols, safeguarding user and partner information.
•   *Legal Framework:* Our contracts and operations are designed to align with international advertising and financial regulations.

We are committed to maintaining a safe, compliant, and high-quality advertising ecosystem.
  `;
  await ctx.replyWithMarkdown(message);
});

// /contact_sales command: Provides professional contact information.
bot.hears('/contact_sales', async (ctx) => {
  const message = `
*Connect with Our Sales & Partnership Team:*

For detailed discussions on advertising contracts, partnership opportunities, or any specific inquiries, please reach out to our dedicated team:

•   *Email:* contact@telescope-ads.com
•   *Telegram Support:* @telescope_support (for general inquiries)

We look forward to discussing how TeleScope can meet your strategic objectives.
  `;
  await ctx.replyWithMarkdown(message);
});

// Fallback for any unrecognized text input.
bot.on('text', async (ctx) => {
  const unknownCommandMessage = `
I apologize, I didn't understand that command.
Please use one of the predefined commands to navigate our services.
Type /help to see a list of available commands.
  `;
  await ctx.replyWithMarkdown(unknownCommandMessage);
});

// --- Error Handling ---
// A basic error handler to catch any unexpected issues and provide a polite message.
bot.catch((err, ctx) => {
  console.error(`Error for ${ctx.updateType}:`, err);
  ctx.reply('An unexpected error occurred. Our team has been notified. Please try again later.');
});

// --- Vercel Deployment Export ---
// This is the critical part for Vercel. It exports a function that Vercel will call
// when your bot receives an update from Telegram. It correctly uses Telegraf's
// webhookCallback to process the incoming request.
module.exports = async (request, response) => {
  // Telegraf's webhookCallback expects a POST request.
  if (request.method === 'POST') {
    // Process the incoming Telegram update.
    return bot.webhookCallback('/')(request, response);
  }
  // For any other request method (e.g., GET), simply return a 200 OK.
  // This is common for health checks or initial browser visits to the Vercel URL.
  response.statusCode = 200;
  response.end();
};