import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          navbar: {
            logout: "Log Out",
            login: "Log In",
            inventory: "Inventory",
            guest: "Guest",
          },
          inventory: {
            addItem: "Add Item",
            category: "Category",
            delete: "Delete",
            edit: "Edit",
            inventoryList: "Inventory List",
            name: "Name",
            owner: "Owner",
            price: "Price",
            tools: "Action",
          },
          admin: {
            admin: "Admin",
            adminView: "Admin View",
            action: "Action",
            createNewUser: "Create New User",
            firstName: "First Name",
            lastName: "Last Name",
            email: "E-mail",
            homeNventoryUserList: "Home nVentory User List",
            password: "Password",
            status: "Status",
            role: "Role",
            category: "Category",
            createCategory: "Create Category",
            edit: "Edit",
            delete: "Delete",
            users: "Users"
          },
          home: {
            tagline: "Inventory your belongings with HOME nVentory",
            description1: "Find the right insurance that you need",
            description2: "Make filing claims hassle free",
            description3: "it's free and easy to use!",
            button: "Start inventorying now!",
          },
          login: {
            alreadyHaveAnAccount: "Already have an account?",
            firstName: "First Name",
            languageChosen: "English",
            languagePreference: "Language Preference",
            lastName: "Last Name",
            logOut: "Log Out",
            logOutConfirm: "Are you sure you want to log out?",
            newUser: "New User",
            password: "Password",
            register: "Register",
          },
          profile: {
            accountSettings: "Account Settings",
            accountCreated:
              "Account Created. In order to login, you have activate your account click the link of the email sent to your account.",
            update: "Update",
          },
          other: {
            emailVerificationConfirmation: "You have been verified, you can close this page.",
            pageNotFound: "Page not found!"
          }
        },
      },
      fr: {
        translation: {
          navbar: {
            logout: "Se d??connecter",
            login: "Connexion",
            inventory: "Inventaire",
            guest: "l' invit??",
          },
          inventory: {
            addItem: "Ajouter un Item",
            category: "Cat??gorie",
            delete: "Effacer",
            edit: "??diter",
            inventoryList: "Liste d'Inventaire",
            name: "Le Nom",
            owner: "Propri??taire",
            price: "Prix",
            tools: "Action",
          },
          admin: {
            admin: "Administrateur",
            adminView: "Vue Administrateur",
            action: "Action",
            createNewUser: "Cr??er un nouvel utilisateur",
            firstName: "Pr??nom",
            lastName: "Le nom de famille",
            email: "E-mail",
            homeNventoryUserList: "Home nVentory Liste D'utilisateur",
            password: "Le Mot de Passe",
            status: "Statut",
            category: "Cat??gorie",
            createCategory: "Cr??er une Cat??gorie",
            role: "R??le",
            edit: "??diter",
            delete: "Effacer",
            users: "Utilisateurs"
          },
          home: {
            tagline: "Inventoriez vos biens avec HOME nVentory",
            description1: "Trouvez la bonne assurance dont vous avez besoin",
            description2: "Simplifiez le d??p??t des r??clamations",
            description3: "C'est gratuit et facile ?? utiliser!",
            button: "Commencez ?? faire l'inventaire maintenant!",
          },
          login: {
            alreadyHaveAnAccount: "Vous avez d??j?? un compte?",
            firstName: "Le pr??nom",
            languageChosen: "Fran??ais",
            languagePreference: "Pr??f??rence de Langue",
            lastName: "Le nom de famille",
            logOutConfirm: "??tes-vous s??r de vouloir vous d??connecter?",
            newUser: "Nouvel utilisateur",
            password: "Le mot de passe",
            register: "Inscrire",
          },
          profile: {
            accountSettings: "Account Settings",
            accountCreated:
              "Compte cr????. Pour vous connecter, vous devez activer votre compte en cliquant sur le lien de l'e-mail envoy?? ?? votre compte.",
            update: "Mettre ?? Jour",
          },
          other: {
            emailVerificationConfirmation: "Vous avez ??t?? v??rifi??, vous pouvez fermer cette page.",
            pageNotFound: "Page non trouv??e!",
          }
        },
      },
    },
  });

export default i18n;
