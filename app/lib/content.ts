export const steps = [
  {
    number: "01",
    anchor: "step-01",
    title: "Go to the Perplexity website",
    description: "Start at the main Perplexity website before doing anything else.",
    bullets: [
      "Open the site in your browser.",
      "Use the same browser session for the full activation flow.",
    ],
    image: null,
  },
  {
    number: "02",
    anchor: "step-02",
    title: "Sign in to your account",
    description: "Log in before you try to change the pricing plan.",
    bullets: [
      "Only new accounts with no previous Pro subscriptions are accepted.",
      "Do not continue with an account that has already had Perplexity Pro before.",
    ],
    image: null,
  },
  {
    number: "03",
    anchor: "step-03",
    title: "Click Update your pricing plan",
    description: "Once you are signed in, open the pricing flow from your account.",
    bullets: [
      "Find the option labeled “Update your pricing plan”.",
      "This takes you to the checkout page where the billing settings can be changed.",
    ],
    image: {
      src: "/guide/perplexity-plan.png",
      alt: "Perplexity pricing plan screen",
      caption: "Use the pricing plan entry point after signing in.",
    },
  },
  {
    number: "04",
    anchor: "step-04",
    title: "Switch to Annual Billing",
    description: "The checkout must be on annual billing before you apply the code.",
    bullets: [
      "Do not leave the billing cycle on monthly.",
      "Confirm the annual option is selected before moving to the next field.",
    ],
    image: null,
  },
  {
    number: "05",
    anchor: "step-05",
    title: "Select the currency of your bank country",
    description: "Use the currency that matches your bank country at checkout.",
    bullets: [
      "Choose the correct currency from the available list.",
      "Make sure the billing information matches the selected country and currency.",
    ],
    image: null,
  },
  {
    number: "06",
    anchor: "step-06",
    title: "Enter your Promo Code",
    description: "Apply your promo code in the dedicated field on the checkout form.",
    bullets: [
      "Enter the code exactly as provided to you.",
      "Wait for the checkout summary to refresh after applying it.",
    ],
    image: {
      src: "/guide/perplexity-promo.png",
      alt: "Perplexity promo code field on checkout",
      caption: "Apply the promo code in the checkout form before submitting payment.",
    },
  },
  {
    number: "07",
    anchor: "step-07",
    title: "Confirm the total becomes €0",
    description: "Before paying, verify that the discount has fully reduced the total.",
    bullets: [
      "The total should display €0 after the code is accepted.",
      "If the price does not change, stop and troubleshoot before continuing.",
    ],
    image: null,
  },
  {
    number: "08",
    anchor: "step-08",
    title: "Enter your card details and billing address",
    description: "Complete the payment form only after the discounted total is correct.",
    bullets: [
      "Use a valid debit card, preferably Visa or Mastercard.",
      "Enter your existing billing address exactly as your bank expects it.",
    ],
    image: null,
  },
  {
    number: "09",
    anchor: "step-09",
    title: "Finish the €0 payment and cancel auto-renewal if needed",
    description: "After the successful €0 checkout, you can disable renewal from settings.",
    bullets: [
      "Complete the payment flow and wait for confirmation.",
      "If you do not want renewal later, go to your settings and click “Cancel Subscription”.",
    ],
    image: null,
  },
] as const;

export const faqs = [
  {
    question: "What if the promo code says it is invalid?",
    answer:
      "Check that the account is new, make sure a valid debit card is entered, and if it still fails change your IP to another European country before trying again.",
  },
  {
    question: "Can I use an account that already had Perplexity Pro before?",
    answer:
      "No. The source instructions say only new accounts with no previous Pro subscriptions are accepted.",
  },
  {
    question: "When should I cancel the subscription?",
    answer:
      "Only after the €0 payment succeeds. Then you can open settings and use the cancel subscription option if you do not want auto-renewal.",
  },
] as const;
