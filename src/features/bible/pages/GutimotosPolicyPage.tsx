import {
  Box,
  Container,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";

export default function PrivacyPolicyPage() {
  return (
    <Box
      sx={{
        py: 6,
        bgcolor: "background.default",
        minHeight: "100vh",
      }}
    >
      <Container maxWidth="md">
        <Paper
          elevation={2}
          sx={{
            p: { xs: 3, md: 5 },
            borderRadius: 3,
          }}
        >
          <Typography
            variant="h3"
            component="h1"
            gutterBottom
            fontWeight={700}
          >
            Política de Privacidad
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ mb: 4 }}
          >
            Última actualización: 27 de junio de 2026
          </Typography>

          <Typography paragraph>
            La presente Política de Privacidad describe cómo la aplicación móvil
            de la concesionaria gestiona la información de los usuarios.
          </Typography>

          <Divider sx={{ my: 3 }} />

          <Typography variant="h5" gutterBottom fontWeight={600}>
            1. Información General
          </Typography>

          <Typography paragraph>
            Esta aplicación tiene como finalidad mostrar un catálogo informativo
            de vehículos, incluyendo fotografías reales, características,
            especificaciones y descripciones proporcionadas por la
            concesionaria.
          </Typography>

          <Divider sx={{ my: 3 }} />

          <Typography variant="h5" gutterBottom fontWeight={600}>
            2. Datos Recopilados
          </Typography>

          <Typography paragraph>
            La aplicación no requiere registro, creación de cuentas ni inicio
            de sesión.
          </Typography>

          <Typography paragraph>
            La aplicación no recopila información personal identificable de los
            usuarios.
          </Typography>

          <List dense>
            <ListItem>
              <ListItemText primary="Nombres y apellidos" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Correos electrónicos" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Números telefónicos" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Documentos de identidad" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Direcciones físicas" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Ubicación precisa del dispositivo" />
            </ListItem>
          </List>

          <Divider sx={{ my: 3 }} />

          <Typography variant="h5" gutterBottom fontWeight={600}>
            3. Uso de la Información
          </Typography>

          <Typography paragraph>
            Debido a que la aplicación no recopila datos personales de los
            usuarios, no se realiza almacenamiento, procesamiento, venta,
            cesión ni intercambio de información personal.
          </Typography>

          <Divider sx={{ my: 3 }} />

          <Typography variant="h5" gutterBottom fontWeight={600}>
            4. Fotografías y Contenido
          </Typography>

          <Typography paragraph>
            Las imágenes, fotografías y descripciones mostradas corresponden a
            vehículos comercializados por la concesionaria y tienen fines
            exclusivamente informativos y comerciales.
          </Typography>

          <Divider sx={{ my: 3 }} />

          <Typography variant="h5" gutterBottom fontWeight={600}>
            5. Servicios de Terceros
          </Typography>

          <Typography paragraph>
            La aplicación puede utilizar servicios tecnológicos para alojar
            imágenes, contenido o infraestructura necesaria para su correcto
            funcionamiento. Dichos proveedores operan bajo sus propias políticas
            de privacidad.
          </Typography>

          <Divider sx={{ my: 3 }} />

          <Typography variant="h5" gutterBottom fontWeight={600}>
            6. Seguridad
          </Typography>

          <Typography paragraph>
            Se implementan medidas razonables para garantizar la disponibilidad
            e integridad de la información mostrada en la aplicación.
          </Typography>

          <Divider sx={{ my: 3 }} />

          <Typography variant="h5" gutterBottom fontWeight={600}>
            7. Menores de Edad
          </Typography>

          <Typography paragraph>
            La aplicación no está dirigida específicamente a menores de edad y
            no recopila información personal de sus usuarios.
          </Typography>

          <Divider sx={{ my: 3 }} />

          <Typography variant="h5" gutterBottom fontWeight={600}>
            8. Modificaciones
          </Typography>

          <Typography paragraph>
            Esta Política de Privacidad podrá actualizarse periódicamente para
            reflejar cambios legales, operativos o tecnológicos. Las
            actualizaciones serán publicadas en esta misma página.
          </Typography>

          <Divider sx={{ my: 3 }} />

          <Typography variant="h5" gutterBottom fontWeight={600}>
            9. Contacto
          </Typography>

          <Typography paragraph>
            Si tiene consultas relacionadas con esta Política de Privacidad,
            puede comunicarse con la concesionaria a través de los canales
            oficiales de atención al cliente al whatsapp: 67398260.
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ mt: 5 }}
          >
            © 2026 Concesionaria. Todos los derechos reservados.
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
}