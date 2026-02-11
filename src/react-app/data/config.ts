export interface PhoneEntry {
  display: string;
  clean: string;
}

export interface ContactInfo {
  phones: PhoneEntry[];
  /** Primary phone used for deep links (WhatsApp, Viber) */
  primary: PhoneEntry;
  whatsappUrl: string;
  viberUrl: string;
}

const phone1: PhoneEntry = { display: '+359 879 923 096', clean: '359879923096' };
const phone2: PhoneEntry = { display: '+359 879 855 035', clean: '359879855035' };

export const CONTACT_CONFIG: ContactInfo = {
  phones: [phone1, phone2],
  primary: phone1,
  whatsappUrl: `https://wa.me/${phone2.clean}`,
  viberUrl: `viber://chat?number=%2B${phone2.clean}`,
};
