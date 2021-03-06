import {createStyles, makeStyles, Theme} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            paddingTop: theme.spacing(5)
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary
        },
        cryptoInputBox: {
            marginBottom: 20,
            marginTop: 10
        },
        currencyInput: {
            minWidth: 'calc(70% - 10px)',
            marginRight: 10
        },
        currencyType: {
            minWidth: '30%'
        },
        table: {
            minWidth: 650,
        },
        currencyIcon: {
            width: 18,
            height: 18,
            borderRadius: 30
        },
        columnGreen: {
            backgroundColor:'#d8ffc4'
        },
        columnRed: {
            backgroundColor: '#ffdada'
        }
    })
)

export default useStyles
